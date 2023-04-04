import InstagramIcon from './Icons/InstagramIcon';
import GithubIcon from './Icons/GithubIcon';
import LinkedinIcon from './Icons/LinkedinIcon';
import YoutubeIcon from './Icons/YoutubeIcon';
import DiscordIcon from './Icons/DiscordIcon';
function Socials() { 
  return (
    <div className=' bg-social flex flex-col bg-cover h-full bg-no-repeat bg-top space-y-20 p-6'>
      <div className = 'flex justify-center text-white font-bold text-2xl md:text-4xl items-start'>
        <u>Social Media and more info</u>
      </div>
      <div className='flex justify-center flex-wrap gap-8 items-center'>
        <InstagramIcon link = "https://www.instagram.com/fsc_code4all/"/>
        <LinkedinIcon link = "https://www.linkedin.com/groups/12703357/"/>
        <DiscordIcon link = "https://discord.gg/M35dqE69tN"/>
        <GithubIcon link = "https://github.com/KyoshiNoda/ACM-Website"/>
        <YoutubeIcon link = ""/>
      </div>
    </div>

  )
}

export default Socials