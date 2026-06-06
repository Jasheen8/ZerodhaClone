import React from 'react';
function Awards () {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5' >
                    <img src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-6 p-5 mt-3 ' >
                    <h1>Largest stock broker in India
                    </h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute</p>
                        <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>a</p>
                                </li>
                                <li>
                                    <p>b</p>
                                </li>
                                <li>
                                    <p>c</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>a</p>
                                </li>
                                <li>
                                    <p>b</p>
                                </li>
                                <li>
                                    <p>c</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png'style={{width:"90%"}}/>
                        
                </div>
                
            </div>

        </div>
    );
}

export default Awards;