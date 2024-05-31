import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField,Button } from '@mui/material';

const Capcha = () => {

    const[ca,setc]=useState([{cc:"qga64"},{cc:"ir5cm"},{cc:"9wgis"},{cc:"2w0qt"},{cc:"60lkj"}])
    const[cca,setcc]=useState(ca)
    const[rd,setr]=useState("")
    const[dd,setd]=useState({cap:""})
    const[mes,setm]=useState("")
     

    function ju()
    {
      
      console.log("hello")
      let fg=cca[Math.floor(Math.random()*cca.length)].cc
      setr(fg)
    }
    function gv(event)
    {
      setd(prev=>{return{...prev,[event.target.name]:event.target.value}})
    }
    function ik(event)
    {
       event.preventDefault()
      let fv=(rd===dd.cap)?"ENTERED CAPCHA IS CORRECT":"ENTERED CAPCHA IS WRONG"
      setm(fv)
    }

  return (

    <Box>

      
      <form onSubmit={ik}>
        
        <Box sx={{display:'flex',flexDirection:'column',border:'3px solid black',  width: {
          xs: '100%',  // 0px and up
          sm: '75%',   // 600px and up
          md: '50%',   // 900px and up
          lg: '25%',   // 1200px and up
          xl: '25%',   // 1536px and up
        },
        padding:'15px',
        backgroundColor:'#f0f0f0',
        boxShadow:'0 0 45px rgba(255, 255, 255, 0.6);',
        borderRadius:'25px',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'50px',
        justifyContent:'center',
        alignItems:'center'
        
        }}>

          <Typography sx={{backgroundColor:'#e9e3b4',textAlign:'center',width:'50%',marginLeft:'auto',marginRight:'auto',borderRadius:'30px',
            padding:'10px',marginBottom:'10px'
          }} >Capcha Generator</Typography>

          <TextField
                              
                              required
                              fullWidth
                              margin="dense"
                              type="String"
                              value={rd}
                              variant="outlined"
                              InputLabelProps={{ style: { color: 'black',fontFamily:'cursive'} }}
                              InputProps={{style:{borderRadius:'25px'}}}
                              
                              
                              />

          <TextField
                              
                              required
                              fullWidth
                              margin="dense"
                              type="String"
                              label="Type the capcha above to verify after generating"
                              value={dd.cap}
                              name="cap"
                              onChange={gv}
                              variant="outlined"
                              InputLabelProps={{ style: { color: 'black',fontFamily:'cursive' } }}
                              InputProps={{style:{borderRadius:'25px'}}}
                              
                              />
                    
                    <Box sx={{width:'100%',display:'flex',justifyContent:'center',marginTop:'15px',marginBottom:'10px'}}>

                      <Button onClick={ju} sx={{borderRadius:'25px',marginRight:'15px'}}>
                          Generate
                      </Button>

                      <Button type="submit"  sx={{borderRadius:'25px'}}>

                          Submit

                      </Button>

                    </Box>

          <Typography sx={{fontWeight:'black'}}>{mes}</Typography>

        </Box>
        </form>  

    </Box>
  )
}

export default Capcha