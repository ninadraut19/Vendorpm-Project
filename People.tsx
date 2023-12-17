// People.tsx
import React from 'react';
import './People.css'; // Import the CSS file for styling

interface Person {
  name: string;
  country: string;
}

interface PeopleProps {
  people: Person[];
}

const People: React.FC<PeopleProps> = ({ people }) => {
  return (
    <div className="people-container">
      <div>
        <h2>People List</h2>
        <table className="people-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default People;
