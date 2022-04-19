DROP DATABASE IF EXISTS animalsDB;
CREATE DATABASE animalsDB; 
USE animalsDB;

DROP TABLE IF EXISTS ANIMAL;
CREATE TABLE ANIMAL (
AnimalID			integer not null,
AnimalName			varchar(50),
Species				varchar(50),
Weight				integer,
Tatto_Num			varchar(50),
CityTatoo			varchar(50),
Breed				varchar(50),
Sex					varchar(10),
RFID				varchar(30),
Microchip			varchar(30),
AnimalAvailability	varchar(30),
SubSpecies			varchar(50),
primary key (AnimalID)
);

INSERT INTO ANIMAL(AnimalID, AnimalName ,Species, Weight, Tatto_Num, CityTatoo, Breed, Sex, RFID, Microchip, AnimalAvailability, Subspecies)
VALUES
(1,'Sparky','Dog', 40,'237645', 'HOC London', 'Beagle', 'M', '873865287', '234875398', 'Available', 'Gray Wolf'),
(4,'Lucky','Dog', 40,'2345645', 'CBH India', 'Beagle', 'M', '98987423', '928347', 'Available', 'Gray Wolf'),
(2, 'Roach','Horse','105' ,'2345645', 'ABC London', 'Quarter Horse', 'F', '8735287', '23484875398', 'Injured', 'Tarpan'),
(3, 'Bessie','Cow','900' ,'233045', 'CBH India', 'Abigar', 'F', '87343065287', '2396875398', 'Sick', 'Tarus'),
(5, 'Lara','Dog','50' ,'123456', 'London', 'Workingham', 'F', '1233065287', '43295398', 'Sick', 'GermanShepard');



DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS(
UserID					integer not null,
Username				varchar(50),
UserPassword			varchar(50),
UserRole				varchar(50),
Email					varchar(50),
ActivationDay			varchar(10),
ActivationMonth			varchar(10),
ActivationYear			varchar(10),
UserAdmin					integer,

primary key(UserID)
);

INSERT INTO USERS(UserID, Username, UserPassword, UserRole, Email, ActivationDay, ActivationMonth, ActivationYear, UserAdmin)
VALUES
(1, 'jacksparrow' ,'jack55' ,'admin', 'jacksparow@uofc.ca', '10', '2', '2020', 1),
(2, 'donaldduck', 'donny$$$','animal technician', 'donaldtheduck@ucalgary.ca','10','3','2021', 1),
(3, 'mickeymouse', 'mikey12','student', 'mickeythemouse@ucalgary.ca','10','4','2021', 1),
(4, 'speedygonzales','speeeeed','student', 'speedygone@ucalgary.ca', '10','5','2021',1 ),
(5, 'slowepokerodriguez', 'slowqwerty','care attendant', 'slowpoke@ucagalry.ca', '10','5','2020',1) ;




DROP TABLE IF EXISTS CATTLE_ANIMAL;
CREATE TABLE CATTLE_ANIMAL (
	AnimalID			integer not null,
	DraughtMeatDairy	varchar(50),
	Region				varchar(50),
    
	primary key (AnimalID),
    foreign key (AnimalID) references ANIMAL(AnimalID) 
);

INSERT INTO CATTLE_ANIMAL(AnimalID, DraughtMeatDairy, Region)
VALUES
(1, 'Dairy' ,'Spain'),
(2, 'Dairy', 'Italy'),
(3, 'Meat', 'Canada');




DROP TABLE IF EXISTS ANIMAL_COLOR;
CREATE TABLE ANIMAL_COLOR (
	AnimalID			integer not null,
	Color				varchar(70) not null,
    
	primary key (Color),
	foreign key (AnimalID) references ANIMAL(AnimalID) 
);

INSERT INTO ANIMAL_COLOR(AnimalID, Color)
VALUES
(1, 'Black'),
(2, 'Brown, Black, White'),
(3, 'Brown');




DROP TABLE IF EXISTS ANIMAL_DISTINGUISHING_FEATURES;
CREATE TABLE ANIMAL_DISTINGUISHING_FEATURES (
	AnimalID					integer not null,
	DistinguishingFeatures		varchar(100) not null,
    
	primary key (DistinguishingFeatures),
	foreign key (AnimalID) references ANIMAL(AnimalID) 
);
INSERT INTO ANIMAL_DISTINGUISHING_FEATURES(AnimalID, DistinguishingFeatures)
VALUES
(1, 'Baying, bark'),
(2, 'Stocky, compact');



DROP TABLE IF EXISTS ANIMAL_STATUS;
CREATE TABLE ANIMAL_STATUS (
	HealthStatus				varchar(70) not null,
	AnimalID					integer not null,
    Location					varchar(70) not null,
    StYear						varchar(10),
    StMonth 					varchar(10),
    StDay						varchar(10),
    StDescription				varchar(200),
            
	primary key (HealthStatus, AnimalID),
  	foreign key (AnimalID) references ANIMAL(AnimalID) 
);


INSERT INTO ANIMAL_STATUS(AnimalID, HealthStatus, Location, StYear, StMonth, StDay, StDescription)
VALUES
(1, 'Available','Campus', '2021', 'September', '21', 'foot is injured'),
(2, 'Available','Campus', '2020', 'October', '21', 'brain injury'),
(3, 'Not Available', 'Hospital', '2021', 'Novermber', '21','Skin injury');




DROP TABLE IF EXISTS TREATMENT_METHOD;
CREATE TABLE TREATMENT_METHOD(
TreatmentID						integer not null,
TreatmentType 					varchar(200),
AnimalID						integer not null,
primary key(TreatmentID),
foreign key(AnimalID) references ANIMAL(AnimalID)
);

INSERT INTO TREATMENT_METHOD(TreatmentID, AnimalID, TreatmentType)
VALUES
(1, 2,  'Physical Exam'),
(2, 3, 'Blood Work'),
(3, 1, 'Dental Cleaning');


DROP TABLE IF EXISTS MEDICAL_RECORDS_TYPE;
CREATE TABLE MEDICAL_RECORDS_TYPE(
RecordID 						integer not null,
MedicalType						varchar(200),
AnimalID						integer not null,
primary key(RecordID),
foreign key(AnimalID) references ANIMAL(AnimalID)
);

INSERT INTO MEDICAL_RECORDS_TYPE(RecordID, MedicalType, AnimalID)
VALUES
(1,'Xray',1),
(2,'DICOm',1),
(3,'NOTA',1),
(4,'LINK',1),
(5,'Surgery',1),
(6,'Invoice',1),
(7,'Xray',2),
(8,'Xray',3),
(9,'NOTA',2),
(10,'LINK',2),
(11,'Surgery',2),
(12,'Invoice',2);






DROP TABLE IF EXISTS PRESCRIPTION_RECORDS;
CREATE TABLE PRESCRIPTION_RECORDS (
	PrescriptionID					integer not null,			
	AnimalID						integer not null,
	UserID			   				integer not null,
    PresDay             			varchar(10),
    PresMonth           			varchar(10),
    PresYear           				varchar(10),
    DrugID             				varchar(50),
    Dosage             				varchar(50),
    DrugName           				varchar(50),
    
    
	primary key (PrescriptionID),
    foreign key (UserID) references USERS(UserID), 
    foreign key (AnimalID) references ANIMAL(AnimalID) 
);

INSERT INTO PRESCRIPTION_RECORDS (PrescriptionID, AnimalID, USerID, PresDay, PresMonth, PresYear, DrugID, Dosage, DrugName)
VALUES
(1,2,3, 'Friday', 'May', '2021', null, null, null),
(2,2,2, 'Friday', 'May', '2021', null, null, null),
(3,2,3, 'Friday', 'May', '2021', null, null, null);




DROP TABLE IF EXISTS PRESCRIPTION_RECORD_DELIVERYMETHOD;
CREATE TABLE PRESCRIPTION_RECORD_DELIVERYMETHOD(
PrescriptionID						integer not null,
DeliveryMethod						varchar(500),

primary key(DeliveryMethod, PrescriptionID),
foreign key(PrescriptionID) references PRESCRIPTION_RECORDS(PrescriptionID)
);

INSERT INTO PRESCRIPTION_RECORD_DELIVERYMETHOD(DeliveryMethod, PrescriptionID)
VALUES
('oral',1),
('oral',2);



DROP TABLE IF EXISTS PRESCRIPTION_RECORD_INSTRUCTIONS;
CREATE TABLE PRESCRIPTION_RECORD_INSTRUCTIONS(
PrescriptionID						integer not null,
Instructions						varchar(500),
primary key(Instructions, PrescriptionID),
foreign key(PrescriptionID) references PRESCRIPTION_RECORDS(PrescriptionID)
);

INSERT INTO PRESCRIPTION_RECORD_INSTRUCTIONS(Instructions, PrescriptionID)
VALUES
("Hide the pill in a sausage and give it to the dog", 1),
("Hide the pill in a peanut butter and give it to the dog", 2);


DROP TABLE IF EXISTS COMMENTS;
CREATE TABLE COMMENTS (
	CommentID						integer not null,			
	AnimalID						integer not null,
	UserID			 				integer not null,
    ComDescription    			 	varchar(1000) not null,
    ComDay             				varchar(10) not null,
    ComMonth         				varchar(10)	not null,
    ComYear             			varchar(10)	not null,
    StudentCommentFlag				bit,

         
	primary key (CommentID),
    foreign key (UserID) references USERS(UserID),
    foreign key (AnimalID) references ANIMAL(AnimalID)
    
);
INSERT INTO COMMENTS (CommentID, AnimalID, USerID, ComDescription, ComDay, ComMonth, ComYear, StudentCommentFlag)
VALUES
(1,1, 1, 'Animal presents as ill', '01', 'May', '2021', 1),
(4,1, 2, 'Got better', '10', 'May', '2021', 1),
(2,2, 2, 'Evident injury', 'Tuesday', 'February', '2021', 0),
(3,3, 3, 'Animal presents with pain', 'Thursday', 'June', '2021', 1);


DROP TABLE IF EXISTS IMAGES;
CREATE TABLE IMAGES(
AnimalID 						integer not null,
UserID							integer not null,
ImageID 						integer not null,
FileURL							varchar(500),
ImageType						varchar(50),
CreationDay						varchar(10),
CreationMonth					varchar(10),
CreationYear					varchar(10),

primary key(ImageID),
foreign key(AnimalID) references ANIMAL(AnimalID),
foreign key(UserID) references USERS(UserID)
);

INSERT INTO IMAGES(AnimalID, UserID, ImageID, FileURL, ImageType, CreationDay, CreationMonth, CreationYear)
VALUES
(1, 2, 1,'https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_600_400_int_c1-2x.jpg','profile','08','03','2021'),
(2,2,4,'https://i.natgeofe.com/n/56ad4f59-e256-42b1-bf7c-d04193068703/horse_thumb_3x4.jpg','profile','10','02','2020'),
(3,2,5,'https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg','profile','10','03','2021'),
(4,2,6,'https://cdn.britannica.com/q:60/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg','profile','10','03','2021'),
(1, 2, 2,'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1511835319000/photosp/ig-561738967898795333_596376674/stock-photo-dog-animals-white-puppy-healthy-pitbull-pit-checkup-vet-ig-561738967898795333_596376674.jpg','first visit','09','03','2021'),
(1, 2, 3,'https://www.dogsnaturallymagazine.com/wp-content/uploads/2020/04/Red-eye.jpg','injury','10','03','2021'),
(5, 2, 7,'https://eufded9x77y.exactdn.com/wp-content/uploads/2019/06/german-shepherd-heat-cycle.jpg','profile','05','04','2021');



DROP TABLE IF EXISTS HISTORY;
CREATE TABLE HISTORY(
AnimalID					integer not null,
HistoryID					integer not null,
UserID						integer not null,
Measurement 				varchar(50),
MValue 						varchar(50),
DayTaken					varchar(10),
MonthTaken					varchar(10),
YearTaken					varchar(10),

primary key(HistoryID),
foreign key(AnimalID) references ANIMAL(AnimalID),
foreign key(UserID) references USERS(UserID)
);
INSERT INTO HISTORY(HistoryID, AnimalID, UserID, Measurement, MValue,DayTaken, MonthTaken,YearTaken )
VALUES
(1,1,2,'Weight','105','5','10','2021'),
(2,1,2,'temperature','37','5','10','2021'),
(3,1,2,'heart beat','86','7','10','2021'),
(4,2,2,'dental status','all good','8','10','2021'),
(5,2,2,'blood concentration','about right','8','10','2021');

