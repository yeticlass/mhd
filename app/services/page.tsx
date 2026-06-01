const Services = () => {
    return ( 
        <>
          <section id="services" className="py-5 px-6 md:px-16 mt-1">
       
        <div className="max-w-6xl mx-auto text-center">
          
 
        
          <div className="flex flex-col">
            {[
              'Gypsum Ceiling',
              'PVC Designs',
              'Office Ceiling Solutions',
            ].map((service) => (
              <div
                key={service}
                className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition mt-20"
              >
                <div className="text-5xl mb-4">🏠</div>
                <h4 className="text-2xl font-semibold mb-3">{service}</h4>
                <p className="text-gray-600">
                  Stylish and durable ceiling solutions designed for modern
                  interiors.
                </p>
               
              </div>
              
            ))}
          </div>
        </div>
          
      </section>

        </>
     );
}
 
export default Services;