using System;
using System.Collections.Generic;
using System.Text;

namespace Day_15_Assignments
{
    internal class Patient1
    {
        static void Main(string[] args)
        {
            Patient patient1=new Patient();
            patient1.Patient_ID = 1;
            patient1.Patient_Name = "MAX";
            patient1.Patient_Age = 22;
            patient1.Disease = "FLU";

            Console.WriteLine("Patient Id:"+patient1.Patient_ID);
            Console.WriteLine("Patinet Name:"+patient1.Patient_Name);
            Console.WriteLine("Patient Age:" +patient1.Patient_Age);
            Console.WriteLine("Patient Disease:"+patient1.Disease);


        }
    }
    class Patient
    {
        public int Patient_ID;
        public string? Patient_Name;
        public int Patient_Age;
        public string? Disease;
    }
}
