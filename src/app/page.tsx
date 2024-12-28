import { Card, CardHeader, CardContent } from "@/components/ui/card";
import FormComp from "./form";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="max-w-sm w-full shadow-lg">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center text-gray-800">Bienvenue sur formulaire exemple</h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-center mb-4">
            Tous les options d'un formulaire sont ici
          </p>
          <FormComp></FormComp>
        </CardContent>
      </Card>
    </div>
  );
}
