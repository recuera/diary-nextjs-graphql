import { useState } from 'react';
import styles from '../styles/PostDetail.module.scss';

type Props = {
  title: string;
  body: string;
  save: any;
};

const PostForm = ({ title, body, save }: Props) => {
  const [localTitle, setLocalTitle] = useState(title);
  const [localBody, setLocalBody] = useState(body);

  const handleClick = () => {
    save({ title: localTitle, body: localBody });
  };

  return (
    <div className={styles.form}>
      <div>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          value={localTitle}
          onChange={(e) => setLocalTitle(e.target.value)}></input>
      </div>

      <div>
        <label htmlFor='body'>Body</label>
        <textarea
          name='body'
          rows={30}
          cols={50}
          value={localBody}
          onChange={(e) => setLocalBody(e.target.value)}></textarea>
      </div>

      <button onClick={handleClick}>Save</button>
    </div>
  );
};

export default PostForm;
