pragma solidity 0.4.23; 
contract Car { 
    enum VisitType {Inspection, Repair, Overhaul} 
    struct Visit { uint32 mileage; VisitType visitType; } 
    Visit [] visited;
    bytes32 private id; 
    uint count =0;
  constructor(bytes32 _id) public { id = _id; }
    
    function registerVisit(uint32 _mileage, VisitType _visitType) public { 
        if( _visitType == VisitType.Inspection){ 
            visited[count].mileage=_mileage;
            visited[count].visitType=_visitType;
            
            count++;
        } 
  
        
    } 
            
    function visitsCount() public view returns (uint){
         return count; 
        
    } 
    function hasBeenOverhauled() public view returns (bool) { 
       
        return (visited[count].visitType == VisitType.Overhaul);
    }
    function getLastKnownMileage() public view returns (uint32) { 
        return visited[count].mileage; 
    } 
    
}
