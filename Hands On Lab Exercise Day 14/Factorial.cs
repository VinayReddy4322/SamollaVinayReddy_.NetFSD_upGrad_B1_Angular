using System;
using System.Collections.Generic;
using System.Text;

namespace Day_14_Assignments
{
    internal class Factorial
    {
        static void Mian(String args[])
        {
            int num, fact = 1;
            Console.WriteLine("Enter the Number:");
            num = Convert.ToInt32(Console.ReadLine());
            for (int i = 0; i < num; i++)
            {
                fact = fact * i;
            }
            Console.WriteLine("Factorial Number is:" + fact);
            Console.ReadLine();
        }
    }
}
