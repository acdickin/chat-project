import React from 'react'

const GenderCheckBox = () => {
    return (
        <div className="flex items-center justify-around mt-4 p-2">
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer'>
                    <span className='label-text '>
                        Male
                    </span>
                    <input type='checkbox' className='checkbox border-slate-600' />
                </label>
            </div>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer'>
                    <span className='label-text '>
                        Female
                    </span>
                    <input type='checkbox' className='checkbox border-slate-600' />
                </label>
            </div>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer'>
                    <span className='label-text '>
                        Non-binary
                    </span>
                    <input type='checkbox' className='checkbox border-slate-600' />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox