using System;
using System.Collections.Generic;
using System.Text;

namespace Day_14_Assignments
{
    internal class Reverse
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the name: ");
            String s = Console.ReadLine();
            String rev = " ";
            for (int i = s.Length - 1; i >= 0; i--)
            {
                rev = rev + s[i];
            }
            Console.WriteLine("Reverse is :" + rev);
        }
    }
}
