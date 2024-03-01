import React, { useState } from 'react';
import axios from 'axios';

export default function AddInitiative({ districtAll, user }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    userId: '',
    districtId: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('/api/addinitiative', formData);
    if (response.status === 200) {
      window.location.href = '/';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Название инициативы
          <input value={formData.name} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Текст инициативы
          <input value={formData.description} name="description" className="form-control" id="exampleInputPassword1" onChange={handleChange} />
        </label>
      </div>

      <div className="form-outline flex-fill mb-0">
        <select
          className="form-select"
          aria-label="Default select example"
          name="districtId"
          placeholder="Выберите район"
          type="select"
          id="form3Example1c"
          value={formData.districtId}
          onChange={handleChange}
        >
          {districtAll.map((el) => <option key={el.id} value={el.id}>{el.name}</option>)}
        </select>
        <label className="form-label" htmlFor="form3Example1c">
          Выберите район
        </label>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
