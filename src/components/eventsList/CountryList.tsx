import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import countriesList from "@/assets/countryList";

interface DropdownCountryListProps {
  onChange: (country: string | null) => void;
}

export function DropdownCountryList({ onChange }: DropdownCountryListProps) {
  const handleCountryChange = (country: string | null) => {
    onChange(country);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Country <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select Country</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {countriesList.map((country, index) => {
            return (
              <DropdownMenuItem
                key={index}
                onClick={() => handleCountryChange(country)}
              >
                <span>{country}</span>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
