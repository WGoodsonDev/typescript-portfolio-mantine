import React from "react";
import { 
    Card, Table, 
} from "@mantine/core";

export default function ProjectTable() {
    return (
        <Card>
            <br/>
            <Table highlightOnHover>
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Description</th>
                        <th>Skills Used</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Project Name</td>
                        <td>Description</td>
                        <td>Skills Used</td>
                    </tr>
                    <tr>
                        <td>Project Name</td>
                        <td>Description</td>
                        <td>Skills Used</td>
                    </tr>
                    <tr>
                        <td>Project Name</td>
                        <td>Description</td>
                        <td>Skills Used</td>
                    </tr>
                </tbody>
            </Table>
        </Card>
    );
}