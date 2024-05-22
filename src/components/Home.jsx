import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"; 

export default function Home() {
    return (<>
        <div id="home" className="h-16"></div>
        <div className="hero min-h-[55vh] md:min-h-[80vh] bg-[url('/bg.jpg')]" >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to MathSphere !</h1>
                <p className="mb-5">Welcome to MathSphere Academy, where we simplify mathematics and boost your scores! Under the expert guidance of Mr. Swapnil Ikhar, with over 15 years of experience, master 12th-grade board mathematics and excel in your entrance exams.</p>
                <a href="tel:+918329747194" className="btn btn-primary">Enqiure Now</a>
                </div>
            </div>
        </div>

        {/*  */}
        <div className="p-5 lg:p-10 flex flex-col md:flex-row justify-around">
            <img src='/poster.jpg' className="w-full md:w-1/3"/>
            <form className="flex flex-col justify-center mt-7 md:mt-0">
            <label className="input input-bordered flex items-center gap-2 my-4">
                Name
                <input type="text" className="grow" placeholder="Full Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-4">
                Email
                <input type="text" className="grow" placeholder="example@mail.com" />
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
            <div className="flex flex-col lg:flex-row justify-around items-stretch my-10 text-primary-content">
                <div className="flex flex-col justify-around rounded-md px-3 min-h-[400px] w-full lg:w-1/2">
                    <img src='./mathsphere.png' className="w-full lg:w-3/4 mx-auto block mix-blend-multiply" alt="typo logo"/>
                    <div className="flex items-start">
                        <PhoneIcon className="w-6"/>
                        <p className="ml-3 "><a href="tel:+918329747194">+91 83297 47194</a> | <a href="tel:+917385344961">+91 73853 44961</a></p>
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

        <footer className="footer footer-center p-4 bg-neutral text-neutral-content">
            <aside>
                <p>Copyright © 2024 - All right reserved by MathSphere</p>
            </aside>
            <aside className="flex "> Site developed by <a href="sanketsapate.live">Sanket Sapate</a></aside>
        </footer>
    </>
    );
}