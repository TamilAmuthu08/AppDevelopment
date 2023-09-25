import './Apponecss.css';
import { Link } from 'react-router-dom';

function Appone() {
	return (
		<div className="min-h-screen flex flex-col text-white">
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">

				<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Welcome to</h2>
				<h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">WE Express T</h1>

				<p className="text-base md:text-lg lg:text-2xl mb-8">Our Motto: If it’s yours, you should be able to customize it!</p>

				<div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
					Explore now!
				</div>

				<form 
					action="https://www.getrevue.co/profile/tyler_potts_/add_subscriber" 
					method="post" 
					id="revue-form"
					name="revue-form"
					target="_blank">

					<div className="flex flex-col md:flex-row justify-center mb-4">
						
						<Link to="/signup"><input
							type="submit"
							value="Join Today"
							name="member[subscribe]"
							id="member_submit"
							className="bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
						/></Link>
					</div>

					<div className="opacity-75 italic">
						By subscribing, you agree with WE Express T's <a target="_blank" className="hover:opacity-800 duration-150"><Link to="/term">Terms of Service</Link></a> and <a target="_blank" className="hover:opacity-800 duration-150"><Link to="/privacy" >Privacy Policy </Link></a>.
					</div>

				</form>
			</main>

			<footer className="container mx-auto p-6">
				<div className="flex flex-col md:flex-row items-center justify-between">
			

					<div className="flex -mx-6">
						
					</div>
				</div>
			</footer>
		</div>	
	)
}

export default Appone;