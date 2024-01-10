import { useRef } from 'react';
import { useEffect } from 'react';

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
   const inputReference = useRef(null);

   useEffect(() => {
      console.log(inputReference.current);
      if (inputReference.current) {
         inputReference.current.focus();
      }
   }, []);

   const handleButtonClick = () => {
      if (inputReference.current) {
         inputReference.current.focus();
      }
   };

   return (
      <div>
         <input
            type='text'
            placeholder='Enter text here'
            ref={inputReference}
         />
         <button onClick={handleButtonClick}>Focus Input</button>
      </div>
   );
}
