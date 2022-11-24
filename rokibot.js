const{Client,GatewayIntentBits,EmbedBuilder, PermissionsBitField,Permissions}=require(`discord.js`);

const prefix = '!';
const client=new Client({intents:[GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on("ready",()=>{
	console.log("RokiBot!")
	client.user.setActivity(`😸`,{type:"cat"});
})            

client.on("messageCreate", (message)=>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	//message array

	const messageArray = message.content.split (" ");
	const argument = messageArray.slice(1);
	const cmd = messageArray[0];

	//ovde su komande testbot(1img)

	if(command==='roki'){ 
		  (message.channel.send("https://i.postimg.cc/NjsNky6K/Snapchat-1992382829.jpg"));
	}


})







client.login("[YOUR_TOKEN]");