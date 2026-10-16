import React from "react";
import type { Employee } from "../Data/departmentData";

interface DepartmentProps {
    departmentName: string;
    employees: Employee[];
}

export default function Department({ departmentName, employees,}: DepartmentProps) {
    const [isShown, setIsShown] = React.useState(false);

    function toggleShown() {
        setIsShown((prevShown) => !prevShown);
    }

    return (
        <div>
            <h3>{departmentName}</h3>

            {isShown && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.position}</td>
                                <td>{employee.salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <button onClick={toggleShown}>
                {isShown ? "Collapse" : "Expand"}
            </button>

            <hr />
        </div>
    );
}
