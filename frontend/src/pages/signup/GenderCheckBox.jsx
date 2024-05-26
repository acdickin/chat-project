import React from 'react'

const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
    const checkSelected = (gender) => {
        return (gender == selectedGender) ? "selected" : ""
    }
    const genders = ["male", "female", "non-binary"]

    const renderGenders = () => {
        return genders.map((gender) => (
            <div className='form-control' key={gender}>
                <label className={`label gap-2 cursor-pointer ${checkSelected(gender)}`}>
                    <span className='label-text text-white'>
                        {gender.toLocaleUpperCase()}
                    </span>
                    <input type='checkbox' className='checkbox border-slate-600' checked={selectedGender === gender} onChange={() => onCheckboxChange(gender)} />
                </label>
            </div>
        ))
    }

    return (
        <div className="flex items-center justify-around mt-4 p-2">
            {renderGenders()}
        </div>
    )
}

export default GenderCheckBox