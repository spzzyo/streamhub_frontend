const features = [
    { 
        title: 'Real Time NFT Integrated', 
        description: 'Streamhub features seamless NFT integration, allowing users to buy, sell, and display digital assets within the platform. This integration enables content creators to monetize their work by offering exclusive NFTs to their audience, creating new revenue streams.' 
    },
    { 
        title: 'Live Chat', 
        description: 'The Live Chat feature in Streamhub enables real-time communication between users, enhancing engagement during live events or streams. Participants can interact instantly, ask questions, and share thoughts, creating a more dynamic and interactive experience.' 
    },
    { 
        title: 'Multi-People Rooms', 
        description: 'Streamhub’s Multi-People Rooms allow multiple users to join a single room for collaboration or discussion. These rooms are ideal for group meetings, brainstorming sessions, or interactive events, providing a seamless way for people to connect and communicate in real time.' 
    }
    
]


export const Features = () => {
return (
<div className="bg-black text-white py-[72px]">
    <div className="container">
    <h2 className="text-center font-bold text-5xl tracking-tighter">Features</h2>
    <div className="max-w-xl mx-auto">
    <p className="text-center mt-5 text-xl text-white/70"> 
    The sun was setting, casting a warm orange glow across the horizon. Birds chirped softly as the breeze rustled through the trees. In the distance, waves gently lapped against the shore. The peaceful scene brought a sense of calm, a moment to pause and appreciate nature’s quiet beauty.
    </p>
        </div>    

    </div> 
<div className="mt-16 flex flex-col sm:flex-row gap-4 px-8">
    {features.map(({ title, description}) =>(
        <div key={title} className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1">   
            <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg"></div>
            <h3 className="mt-6 font-bold">{title}</h3>
            <p className="mt-2 text-white/70">{description}</p>
        </div>
    ))}
</div>
</div>


);
};
