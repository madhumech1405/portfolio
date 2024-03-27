import WebSite1 from '../assests/ecommerce-websites.jpg'
import WebSite2 from '../assests/food-ecommerce.jpg'
import WebSite3 from '../assests/website-blog.jpg'

export default function Works() {
    const config={
        projects:[
            {
            image:WebSite1,
            description:' A Ecommerce website.Bulit with MERN stack',
            link:'https://github.com/madhumech1405/petshop'
        },
        {
            image:WebSite2,
            description:'Ecommercr website.website with MERN stack',
            link:'https://github.com/madhumech1405/apicontext'

        },
        {
            image:WebSite3,
            description:'guvi-blog in create  tesk',
            link:'https://github.com/madhumech1405/react-dom'


        }

        ]
    }
  return (
    <section  id="Works" className='flex flex-col py-20 px-5 justify-center bg-primary text-white'> 
        <div className='w-full'>
               
             <div className='flex  flex-col px-10 py-10'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold '> projects</h1>
            <p>these are some my best projects. ihave built these are with mern and css them out</p>
             </div>
            </div>
        <div  className='  w-full  '>
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project)=>(
            <div className='relative'>
            <img className='h-[200px] w-[500px]' src={project.image}/>
            <div className='projects-desc'>
                <p className='text-center py-5 px-5'>{project.description}</p>
                <div>
                   <a className='btn' target='_blank' href={project.link}>view projects</a>
                </div>
            </div>
            </div>
            
           ) )}
            </div>
            </div>
        
      
    </section>
  )
}
 