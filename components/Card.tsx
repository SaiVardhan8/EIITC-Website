


import { User,Users,ShoppingCart,Globe,Microchip,Store,Factory,ShoppingBasket,Trophy,FileOutput,AlarmClockCheck,Bolt,Settings,CalendarCheck,Scale,Scroll,Award,ChartLine,DollarSign,Search,HandHeart,Map,ClipboardList,Boxes,Wifi,Ambulance,Headset,Handshake,PackageOpen,BriefcaseBusiness,FileChartColumnIncreasing,Truck,ListChecks,Smartphone,FileText,Database,CalendarDays,Star,Puzzle,ChartColumn,SquarePen,Bug,UserRoundCheck , SlidersHorizontal } from "lucide-react";

// Map string icon names to Lucide components
const iconComponents = {
  User: User,
  Settings: Settings,
  SlidersHorizontal: SlidersHorizontal,
  Database : Database,
  Bug :Bug ,
  UserRoundCheck : UserRoundCheck,
  CalendarDays : CalendarDays,
  SquarePen : SquarePen,
  ChartColumn : ChartColumn,
  Puzzle : Puzzle,
  Star : Star,
  Smartphone : Smartphone,
  FileText : FileText,
  Scale : Scale,
  ListChecks : ListChecks,
  Boxes : Boxes,
  Truck : Truck,
  BriefcaseBusiness : BriefcaseBusiness,
  Handshake : Handshake,
  PackageOpen : PackageOpen,
  Wifi : Wifi,
  Headset : Headset,
  Ambulance : Ambulance,
  Scroll : Scroll,
  ClipboardList : ClipboardList,
  Map : Map,
  HandHeart : HandHeart,
  Award : Award,
  DollarSign : DollarSign,
  Search : Search,
  ChartLine : ChartLine,
  Users : Users, 
  ShoppingCart : ShoppingCart,
  FileChartColumnIncreasing : FileChartColumnIncreasing,
  Bolt : Bolt,
  CalendarCheck : CalendarCheck,
  AlarmClockCheck : AlarmClockCheck, 
  FileOutput : FileOutput, 
  Trophy : Trophy, 
  ShoppingBasket : ShoppingBasket,
  Factory : Factory,
  Store : Store,
  Microchip : Microchip,
  Globe : Globe,
   

  // Add more icons as needed
};

// Reusable ServiceCard component that only renders content when props are provided
export const ServiceCard = ({ 
  icon, 
  title, 
  services,
  desc,
  iconColor = "text-teal-500",
  backgroundColor = "bg-white",
  titleColor = "text-gray-800",
  textColor = "text-gray-600",
  markerColor = "bg-teal-500",
  hoverEffect = false,
  onClick = undefined
}) => {
  // Get the correct icon component only if icon is provided
  const IconComponent = icon ? (
    typeof icon === 'string' ? 
      (iconComponents[icon] || User) : 
      icon
  ) : null;

  return (
    <div 
      className={`${backgroundColor} rounded-lg shadow-lg p-6 flex flex-col items-center text-center ${hoverEffect ? 'transition-transform hover:scale-105 cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {/* Only render icon if provided */}
      {IconComponent && (
        <div className={`${iconColor} mb-4`}>
          <IconComponent size={36} />
        </div>
      )}
      
      {/* Only render title if provided */}
      {title && (
        <h2 className={`text-xl font-bold ${titleColor} ${IconComponent ? 'mb-6' : 'mb-4'}`}>
          {title}
        </h2>
      )}
      
      {/* Only render divider if title exists */}
      {title && (
        <div className="w-16 h-px bg-gray-200 mb-6"></div>
      )}

      {/* Only render title if provided */}
      {desc && (
        <h2 className={`text-sm ${textColor} ${IconComponent ? 'mb-6' : 'mb-4'}`}>
          {desc}
        </h2>
      )}
      
      {/* Only render services if provided and not empty */}
      {services && services.length > 0 && (
        <div className="w-full text-left space-y-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3">
                <div className={`w-3 h-3 ${markerColor} rounded-sm`}></div>
              </div>
              <p className={`${textColor} text-sm`}>{service}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
