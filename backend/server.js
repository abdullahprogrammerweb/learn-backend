import express from 'express';

const app = express();
const port  = process.env.PORT || 3000;
app.get('/',(req , res)=>{
    res.send('server is ready');
})

app.get('/api/jokes', (req , res)=>{
    const jokes = [
        { id: 1, type: 'pun', joke: 'Why don’t scientists trust atoms? Because they make up everything!' },
        { id: 2, type: 'dad', joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!' },
        { id: 3, type: 'knock-knock', joke: 'Knock, knock. Who’s there? Cow says. Cow says who? No silly, Cow says moooo!' },
        { id: 4, type: 'one-liner', joke: 'I told my wife she was drawing her eyebrows too high. She looked surprised.' },
        { id: 5, type: 'riddle', joke: 'I’m tall when I’m young, and I’m short when I’m old. What am I? A candle!' }
      ];
      
     res.send(jokes)
      
})
  

app.listen(port, ()=>{
    console.log(`server is ready on the port http://localhost:/${port}`);
})