//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract TodoList{
    uint public taskCount= 0;

    struct Task{
        uint id;
        string content;
        bool completed; 

    }
    mapping(uint=>Task) public tasks;

    constructor()  {
        createTask("Checkout My X Profile:https://x.com/prEEt1293");
    }

    function createTask(string memory _content) public {
        taskCount++;
        tasks[taskCount]=Task(taskCount,_content,false);
    }

}