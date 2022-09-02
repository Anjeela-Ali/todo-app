import React from 'react';

const OutputForms = ({ newEntry, removeData }) => {
    console.log(newEntry)
    return (
        <>

            <div className="text-center">
                <h2>My todos List</h2>
            </div>

            {newEntry.map((values,i) => {
                return (
                    <>
                        <div className="text-center p-2  border border-dark w-50 mx-auto my-3">
                            <h2>{values.title}</h2>
                            <p>{values.description}</p>
                            <button className="bg-danger py-1 px-3 text-white border border-none "
                            onClick={()=>{
                                removeData(i)
                            }}
                            >
                                Delete
                            </button>
                        </div>
                    </>
                )
            })}


        </>
    );
}

export default OutputForms;
