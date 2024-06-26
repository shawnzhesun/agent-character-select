import { useRecoilState, useRecoilValue } from 'recoil';
import Sprite from './Sprite';
import { SpriteImageAtom } from '../../atoms/SpriteImageAtom';
import styles from './AgentAvatar.module.css';
import { CurrentSceneAtom } from '../../atoms/CurrentSceneAtom';
import { useEffect } from 'react';
import { playSound } from '../../utils/audio';

interface AgentConfirmProps {
  onFocus: boolean;
  selected: boolean;
  frameCoordinate: string;
}

const AgentConfirm = (props: AgentConfirmProps) => {
  const SpriteImage = useRecoilValue(SpriteImageAtom);
  const [, setCurrentScene] = useRecoilState(CurrentSceneAtom);

  useEffect(() => {
    if (props.selected) {
      playSound('ui-select');
      setCurrentScene(prev => ({...prev, currentSceneId: 'map-scene'}));
    }
  }, [props.selected, setCurrentScene]);

  return (
    <>
      <div className={`${styles.avatar} ${props.onFocus && styles.avatarFocused}`} style={{opacity: 1}}>
        <Sprite frameCoordinate={props.frameCoordinate} image={SpriteImage.buttonImage!} size={32} />
      </div>
    </>
  );
}

export default AgentConfirm;
