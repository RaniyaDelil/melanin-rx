import React from 'react';
import './form.css';

function ReproductiveHealthInsightsForm() {
  return (
    <div className="form-container">
      <h1>Reproductive Health Insights</h1>
      <form action="/search" method="post" className="form">
        <div className="form-group">
          <label htmlFor="race">Mother's Race:   </label>
          <select name="Mother's Single/Multi Race 31" id="race">
            <option value="Black (only)">Black (only)</option>
            <option value="Black and AIAN">Black and AIAN</option>
            <option value="Black and White">Black and White</option>
            <option value="Black and Asian">Black and Asian</option>
            <option value="Black and NHOPI">Black and NHOPI</option>
            <option value="Black, AIAN, and White">Black, AIAN, and White</option>
            <option value="Black, Asian, and White">Black, Asian, and White</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="bmi">Mother's Pre-pregnancy BMI:   </label>
          <select name="Mother's Pre-pregnancy BMI" id="bmi">
            <option value="Underweight <18.5">Underweight - Under 18.5</option>
            <option value="Normal 18.5-24.9">Normal 18.5-24.9</option>
            <option value="Overweight 25.0-29.9">Overweight 25.0-29.9</option>
            <option value="Obesity I 30.0-34.9">Obesity I 30.0-34.9</option>
            <option value="Obesity II 35.0-39.9">Obesity II 35.0-39.9</option>
            <option value="Extreme Obesity III > 39.9">Extreme Obesity III {'>'} 39.9</option>
            <option value="Unknown or Not Stated">Unknown or Not Stated</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="smoking">Smoking Before Pregnancy:   </label>
          <select name="Number of Cigarettes Before Pregnancy" id="smoking">
            <option value="0">0 cigarettes daily</option>
            <option value="1-5">1-5 cigarettes daily</option>
            <option value="6-10">6-10 cigarettes daily</option>
            <option value="11-15">11-15 cigarettes daily</option>
            {/* Additional grouped options */}
            <option value="Unknown or Not Stated">Unknown or Not Stated</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="prenatal">Number of Prenatal Visits:   </label>
          <select name="Number of Prenatal Visits" id="prenatal">
            <option value="0">0 prenatal visits</option>
            <option value="1-5">1-5 prenatal visits</option>
            <option value="6-10">6-10 prenatal visits</option>
            <option value="11-15">11-15 prenatal visits</option>
            {/* Additional grouped options */}
            <option value="Unknown or Not Stated">Unknown or Not Stated</option>
          </select>
        </div>

        <input type="submit" value="Search" className="submit-btn" />
      </form>
    </div>
  );
}

export default ReproductiveHealthInsightsForm;

