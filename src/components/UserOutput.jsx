import React from "react";
import '../style/UserOutput.css';

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>Hi, I am {props.name} and I am a programmer!</p>
      <p>
        Computer programming languages allow us to give instructions to a
        computer in a language the computer understands. Just as many
        human-based languages exist, there are an array of computer programming
        languages that programmers can use to communicate with a computer. The
        portion of the language that a computer can understand is called a
        “binary.” Translating programming language into binary is known as
        “compiling.” Each language, from C Language to Python, has its own
        distinct features, though many times there are commonalities between
        programming languages.
      </p>
      <p>
        These languages allow computers to quickly and efficiently process large
        and complex swaths of information. For example, if a person is given a
        list of randomized numbers ranging from one to ten thousand and is asked
        to place them in ascending order, chances are that it will take a
        sizable amount of time and include some errors.
      </p>
    </div>
  );
};

export default userOutput;
