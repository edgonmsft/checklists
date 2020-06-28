import React, { useState } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function RecentChecklists() {
    const [checklists, setChecklists] = useState(JSON.parse(localStorage.getItem('recentChecklists')) || []);

    setTimeout(() => {
        setChecklists(JSON.parse(localStorage.getItem('recentChecklists')) || []);
    }, 5000);

    return (
        <div>
            <h3>Recent Checklists</h3>
        <CardColumns>
            {checklists.map(list =>
                <Card key={list._id}>
                    <Card.Header as="h5"><Link to={`/view/${list._id}`}>{list.title}</Link></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <span><b>ID:</b> {list._id}</span><br />
                            <span><b>Items:</b> {list.listItems?.length || 0}</span><br />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated {list.lastUpdated}</small>
                    </Card.Footer>
                </Card>)}
        </CardColumns>
        </div>
    );
}