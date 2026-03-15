using System;
using System.Collections.Generic;
using System.Text;

namespace Day_14_Assignments
{
    internal class EvenOddCount
    {
        static void Main(String[] args)
        {
            int Even = 0, Odd = 9;
            Console.WriteLine("Enter The Starting Number:");
            int Start = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter The Ending Number:");
            int End = Convert.ToInt32(Console.ReadLine());
            for (int i = Start; i < End; i++)
            {
                if (i % 2 == 0)
                {
                    Even++;
                }
                else
                {
                    Odd++;
                }
            }
            Console.WriteLine("Even Number Count:" + Even);
            Console.WriteLine("Odd Number Count:" + Odd);
        }
    }
}
