import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';



export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>
      {/* windows + . for emoji shortcut */}
      
      <IconButton color="success" aria-label="like" onClick={() => setLike(like + 1)}>
      <Badge badgeContent={like} color="success"> 
      👍
      </Badge>
      </IconButton>
      <IconButton color="error" aria-label="dislike" onClick={() => setDisLike(dislike + 1)}>
      <Badge badgeContent={dislike} color="error"> 👎 </Badge>
      </IconButton>
    </div>
  );
}
