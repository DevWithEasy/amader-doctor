import React from 'react';

const SelectSpecialist = ({ specializations, setSpecialization,width }) => {
    return (
        <select
            onChange={(e) => setSpecialization(e.target.value)}
            className={`px-2 py-1 ${width && 'w-full'} border focus:outline-blue-500 rounded`}
        >
            <option>অভিজ্ঞতা বাছাই করুন</option>
            {specializations &&
                specializations.map(s => (
                    <option key={s._id} value={s._id}>
                        {s.name}
                    </option>
                ))}
        </select>
    );
};

export default SelectSpecialist;