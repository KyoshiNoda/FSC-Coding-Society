import InstagramIcon from './Icons/InstagramIcon';
import FacebookIcon from './Icons/FacebookIcon';
import GithubIcon from './Icons/GithubIcon';
import LinkedinIcon from './Icons/LinkedinIcon';
import YoutubeIcon from './Icons/YoutubeIcon';
import DiscordIcon from './Icons/DiscordIcon';
function Socials() { 
  return (
    <div className='flex justify-center'>
      <InstagramIcon link = "https://www.instagram.com/acmfsc/"/>
      <FacebookIcon link = "https://www.facebook.com/groups/561867697269550/"/>
      <GithubIcon link = "https://github.com/acm-fsc"/>
      <YoutubeIcon link = "https://www.youtube.com/channel/UCwcO6IibgXFMQivqPa5U68g"/>
      <LinkedinIcon link = "https://www.linkedin.com/groups/12368564/manage/membership/members/"/>
      <DiscordIcon link = "https://discord.gg/VWRv8ncuQh"/>
    </div>
  )
}

export default Socials