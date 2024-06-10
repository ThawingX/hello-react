import { useState } from "react";
const inititalState = {
  userName: "",
  fullName: "",
  Age: "",
};
export default function SubmitFormData() {
  const [formData, setFormData] = useState({ ...inititalState });
  const [isShow, setIsShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsShow(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          value={formData.userName}
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
          type="text"
        />
        <label htmlFor="fullname">FullName:</label>
        <input
          id="fullname"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          type="text"
        />
        <label>Age:</label>
        <input
          value={formData.Age}
          onChange={(e) => setFormData({ ...formData, Age: e.target.value })}
          type="number"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {isShow &&
          Object.keys(formData).map((key) => (
            <li key={key}>
              {key}: {formData[key]}
            </li>
          ))}
      </ul>
    </div>
  );
}
