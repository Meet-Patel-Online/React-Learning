import React from 'react'

function Color() {
    const selectPrimary = () => {
        document.body.style.background="#0d6efd";
        
    }
    const selectSecondary = () => {
        document.body.style.background="#6c757d";
    }
    const selectSuccess = () => {
        document.body.style.background="#198754";
    }
    const selectDanger = () => {
        document.body.style.background="#dc3545";
    }
    const selectWarning = () => {
        document.body.style.background="#ffc107";
    }
    const selectInfo = () => {
        document.body.style.background="#0dcaf0";
    }
    
    return (
        <div>
            <button type="button" onClick={selectPrimary}className="btn btn-outline-primary">Primary</button>
            <button type="button" onClick={selectSecondary} className="btn btn-outline-secondary">Secondary</button>
            <button type="button" onClick={selectSuccess} className="btn btn-outline-success">Success</button>
            <button type="button" onClick={selectDanger} className="btn btn-outline-danger">Danger</button>
            <button type="button" onClick={selectWarning} className="btn btn-outline-warning">Warning</button>
            <button type="button" onClick={selectInfo} className="btn btn-outline-info">Info</button>
        </div>
    )
}

export default Color
