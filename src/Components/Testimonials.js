import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className='w-3/4 m-auto'>
      <h2 className="text-4xl mt-20 text-center" style={{ fontFamily: 'Helvetica, Arial, sans-serif',color: '#FF751A' }}>Testimonials</h2>
      <div className="mt-10">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-orange-500 h-[450px] text-black rounded-xl">
              <div className='h-56 bg-orange-500 flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold" style={{ fontFamily: 'Proxima Nova, Arial, sans-serif' }}>{d.name}</p>
                <p className="text-center" style={{ fontFamily: 'Futura, sans-serif' }}>{d.review}</p>
                <button className='bg-white-500 text-white text-lg px-6 py-1 rounded-xl' style={{ fontFamily: 'Proxima Nova, Arial, sans-serif' }}>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
  
  const data = [
    {
      name: 'John Morgan',
      img: '/Images/John_Morgan.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Ellie Anderson',
      img: '/Images/Ellie_Anderson.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Nia Adebayo',
      img: '/Images/Nia_Adebayo.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Rigo Louie',
      img: '/Images/Rigo_Louie.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Mia Williams',
      img: '/Images/Mia_Williams.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ];
  
  export default Testimonials;