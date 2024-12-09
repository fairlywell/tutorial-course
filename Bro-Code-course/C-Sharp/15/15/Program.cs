namespace _15
{
    internal class Program
    {
        static void Main(string[] args)
        {

            //Console.Write("Enter your name: ");
            String name = "";

            while (name == "")
            {
                Console.Write("Enter your name: ");
                name = Console.ReadLine();
            }

            Console.WriteLine("Hello " + name);

            Console.ReadKey();
        }
    }
}
