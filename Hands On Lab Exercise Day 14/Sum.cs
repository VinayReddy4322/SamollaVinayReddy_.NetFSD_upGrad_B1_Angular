using System;
using System.Collections.Generic;
using System.Text;

namespace Day_14_Assignments
{
    internal class Sum
    {
        static void Main(String [] args)
        {
            Console.WriteLine("Number 1");
            int num1=Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Number 2");
            int num2 = Convert.ToInt32(Console.ReadLine());
            int sum = num1 + num2;
            Console.WriteLine("Sum Of Two Numbers=" + sum);
        }
    }
}
