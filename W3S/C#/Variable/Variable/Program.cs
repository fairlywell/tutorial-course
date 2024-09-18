using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = "John";
            Console.WriteLine(name);

            int firstNum = 15;
            //override
            firstNum = 20;
            Console.WriteLine(firstNum);
            double doubleNum = 5.9;
            Console.WriteLine(doubleNum);
            char charLetter = 'A';
            bool myBool = true;
            Console.WriteLine(charLetter);
            Console.WriteLine(myBool);
            string myString = "Hello my commit hhh";
            Console.WriteLine(myString);
        }
    }
}