const MapView = () => {
  return (
    <iframe
      title="Google Map of Soho House West Hollywood"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1159.4832700398913!2d-118.39329066495426!3d34.08989760000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc1fd023d4cf%3A0x99ba07a6231a4e92!2s9200%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090069!5e1!3m2!1sen!2sus!4v1725502276940!5m2!1sen!2sus"
      width="450px"
      height="300px"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapView;
