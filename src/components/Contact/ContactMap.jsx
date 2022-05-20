import React from 'react'

function ContactMap() {
    
    return (
        <div className="col-lg-6">
            <div className="map-responsive">
                
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d338303.67742516036!2d32.288683!3d48.514113!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1645960848365!5m2!1sen!2sua"
                    style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default ContactMap;
