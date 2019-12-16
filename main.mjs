import { add, subtract} from './modules/calculator.mjs';

//dynamic import
import('./modules/counter.mjs')
  .then((counterModule) => {
    // Do something with the module.
    console.log(counterModule);
    console.log(`Count value: ${counterModule.counter()} `)
  });

console.log(subtract(10,20));  
