import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const ColumnForm = props => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title, icon: icon });
    setTitle('');
    setIcon('');
  };

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  return (
          
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      Icon: <input type="text" value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
