using System;
using System.Collections.Generic;
using System.Text;

namespace Day_14_Assignments
{
    internal class EvenOdd
    {
        static void Main(String [] args)
        {
            Console.WriteLine("Enter the Number:");
            int num = Convert.ToInt32(Console.ReadLine());
            if (num % 2 == 0)
            {
                Console.WriteLine("Even Number");
            }
            else
            {
                Console.WriteLine("Odd Number");
            }
        }
    }
}
