import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"; 

export default function Home() {
    return (<>
        <div id="home" className="h-16"></div>
        <div className="hero min-h-[55vh] md:min-h-[80vh]" style={{backgroundImage: 'url(/bg.jpg)'}}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to MathSphere !</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Apply Now</button>
                </div>
            </div>
        </div>

        {/*  */}
        <div className="p-5 lg:p-10 flex flex-col md:flex-row justify-around">
            <img src='/poster.jpeg' className="w-full md:w-1/3"/>
            <form className="flex flex-col justify-center mt-7 md:mt-0">
            <label className="input input-bordered flex items-center gap-2 my-4">
                Name
                <input type="text" className="grow" placeholder="Daisy" />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-4">
                Email
                <input type="text" className="grow" placeholder="daisy@site.com" />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-4">
                Contact No
                <input type="number" className="grow" placeholder="+91 9876543210" />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-4">
                Class    
                <input type="radio" name="radio-2" className="radio radio-primary ml-4" checked /> 11th
                <input type="radio" name="radio-2" className="radio radio-primary ml-4" /> 12th 
            </label>
            <button className="btn btn-primary my-4">Submit</button>
            </form>
        </div>

        {/* Contact Us */}

        <div className="p-5 lg:p-10">
            <h1 className="text-[0px] ">Contact Us</h1>
            <div className="flex flex-col lg:flex-row justify-around items-stretch my-10 ">
                <div className="flex flex-col justify-around rounded-md px-3 min-h-[400px] w-full lg:w-1/2">
                    <img src='./mathsphere_logo.jpeg' className="w-full lg:w-3/4 mx-auto block mix-blend-multiply" alt="typo logo"/>
                    <div className="flex items-start">
                        <PhoneIcon className="w-6"/>
                        <p className="ml-3 "><a href="tel:+918830479380">+91 88304 79380</a> | <a href="tel:+919049079674">+91 90490 79674</a></p>
                    </div>
                    <div className="flex items-start">
                        <EnvelopeIcon className="w-6"/>
                        <p className="ml-3 "><a href="mailto:info@kiaanlearning.com">info@kiaanlearning.com</a></p>
                    </div>
                    <div className="flex items-start">
                        <MapPinIcon className="w-6"/>
                        <p className="ml-3 max-w-72 md:max-w-80 lg:max-w-72">Plot No 2, Omkar Nagar Besa Road, Near Kala Maroti Temple, Jaywant Nagar, Nagpur - 27</p>
                    </div>
                </div>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119116.6405771803!2d79.091459!3d21.096812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf574908bf19%3A0xcc4a4148c5913589!2sKiaan%20Career%20Point!5e0!3m2!1sen!2sin!4v1714121191682!5m2!1sen!2sin" 
                className="w-full"  
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>

        <footer className="footer footer-center p-4 bg-neutral text-white">
            <aside>
                <p>Copyright © 2024 - All right reserved by MathSphere</p>
            </aside>
            <aside className="flex "> Site developed by <a href="sanketsapate.live">Sanket Sapate</a></aside>
        </footer>
    </>
    );
}