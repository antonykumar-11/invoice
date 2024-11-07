// const express = require("express");
// const app = express();
// const errorMiddleware = require("./middlewares/error");
// const cookieParser = require("cookie-parser");

// const cors = require("cors");
// const path = require("path");
// const dotenv = require("dotenv");
// dotenv.config({ path: path.join(__dirname, "config/config.env") });
// const connectDatabase = require("./config/database");
// const { corsOptions } = "./config/config";
// const bodyParser = require("body-parser");
// // Get the PORT from environment variables or use a default value
// const PORT = process.env.PORT || 5000;

// app.use(express.json());
// app.use(cookieParser());
// app.use(cors(corsOptions));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.use(bodyParser.json());
// app.options("*", cors(corsOptions)); // Handle preflight requests
// const User = require("./routes/userRoutes");

// const taxRoutes = require("./routes/taxRoutes");
// const paymentRoutes = require("./routes/paymentRoutes");
// const purchaseVoucherRoutes = require("./routes/purchaseVoucher");
// const salesVoucherRoutes = require("./routes/salesVoucherRoutes");
// const receiptVouchers = require("./routes/recieptVoucher");
// const journalVoucher = require("./routes/journalRoutes");
// const paymasterVoucher = require("./routes/payMaster");
// const contraVouchers = require("./routes/contraRoutes");
// const creditNotes = require("./routes/creditNoteRoutes");
// const companyRoutes = require("./routes/companyRoutes");
// const tax = require("./routes/findTax");

// const getAllTransactions = require("./routes/getAllTransaction");

// const secondaryLedgerRo = require("./routes/paymentRoutes");

// const stockItems = require("./routes/stockItems");
// const stockCategory = require("./routes/stockCategory");
// const stockGroups = require("./routes/stockGroup");
// app.use("/api/v1/sales-vouchers", salesVoucherRoutes);

// const debitNoteRoutes = require("./routes/debitNote");
// const purchaseRoutess = require("./routes/purchaseVoucher");
// purchaseRoutess;
// const EmployeeRoutes = require("./routes/staff/staffRoutes");
// const employeeHead = require("./routes/staff/employeeHead");
// const payHeadRoutes = require("./routes/staff/payHead");
// const operationsRoute = require("./routes/staff/dummyStaff");
// const payHeadDetailsRoutes = require("./routes/staff/payHeadDetailsRoutes");
// const employeegroupRoutes = require("./routes/staff/employeegroupRoutes");
// const attendanceRoutes = require("./routes/staff/attendanceRoutes");
// const incomeRoutes = require("./routes/antony1");
// const expenseRoutes = require("./routes/expenseExpense");
// const clientledgerRoutes = require("./routes/ledgersRoutes");
// const invoiceRoutes = require("./routes/invoiceRoutes");
// const vehicleRegistrationRoutes = require("./routes/vehicleRegistrationRoutes");
// const groupRoutes = require("./routes/Group");
// const iin = require("./routes/p&l");
// const iiin = require("./routes/antony3");
// const attendanceemployees = require("./routes/attendanceEmployees");
// const clientLedgeri = require("./routes/ledgerFor");
// app.use("/api/v1/auth", User);

// app.use("/api/v1/payments", paymentRoutes);
// app.use("/api/v1/purchases", purchaseRoutess);
// app.use("/api/v1/purchase-vouchers", purchaseVoucherRoutes);
// app.use("/api/v1/sales-vouchers", salesVoucherRoutes);
// app.use("/api/v1/receipt-vouchers", receiptVouchers);
// app.use("/api/v1/journal-vouchers", journalVoucher);
// app.use("/api/v1/paymaster", paymasterVoucher);
// app.use("/api/v1/contra-vouchers", contraVouchers);
// app.use("/api/v1/creditnote", creditNotes);
// app.use("/api/v1/debitnote", debitNoteRoutes);
// app.use("/api/v1", companyRoutes);
// app.use("/api/v1/find", tax);
// app.use("/api/v1", groupRoutes);
// app.use("/api/v1/transactions", getAllTransactions);

// app.use("/api/PAYMENT", secondaryLedgerRo);
// app.use("/api/v1/items", require("./routes/itemRoutes"));

// app.use("/api/v1/stocks", stockItems);
// app.use("/api/v1/stocks", stockCategory);
// app.use("/api/v1/stocks", stockGroups);
// const transactionRoutes = require("./routes/antony");
// app.use("/api/v1/employees", EmployeeRoutes);
// app.use("/api/v1/client/ledgers", clientledgerRoutes); //ella ledgerum evide anu ullathu final

// app.use("/api/vi/client/taxRoutes", taxRoutes);
// app.use("/api/v1/employeehead", employeeHead);
// app.use("/api/v1/payheads", payHeadRoutes);
// app.use("/api/v1/operations", operationsRoute);
// app.use("/api/v1/payHeadDetails", payHeadDetailsRoutes);
// app.use("/api/v1/employeegroups", employeegroupRoutes);
// app.use("/api/v1/attendances", attendanceRoutes);
// app.use("/api/v1/attendanceemployees", attendanceemployees);
// app.use("/api/v1/client/ledger", clientLedgeri);
// app.use("/api/v1", vehicleRegistrationRoutes);
// // app.use("/api/v1/expenseincomes", incomeRoutes);
// // app.use("/api/v1/expenseexpense", expenseRoutes);
// app.use("/api/v1/", transactionRoutes);
// app.use("/api/v1/expenseincomes", incomeRoutes);
// app.use("/api/v1/expenseexpensee", iin);
// app.use("/api/v1/expenseexpense", iiin);
// app.use("/api/v1/invoices", invoiceRoutes);
// const ledgerRoutes = require("./routes/check");
// app.use("/api/v1/transections", require("./routes/transactionRoutes"));
// app.use("/api/v1/transection", require("./routes/transectionRoute")); //personal app
// // Add this line to use the ledger routes
// app.use("/api/v1", ledgerRoutes);
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
//   });
// }

// // Routes

// app.use(errorMiddleware);

// connectDatabase();

// app.listen(PORT, () => {
//   console.log(
//     `Server is listening on port ${PORT} in ${process.env.NODE_ENV} mode`
//   );
// });
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const errorMiddleware = require("./middlewares/error");
const connectDatabase = require("./config/database");

// Load environment variables
dotenv.config({ path: path.join(__dirname, "config/config.env") });

// CORS options
// CORS options
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174", // Add this line to include the new port
    "http://localhost:3000",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

// Create an instance of express
const app = express();

// Connect to database
connectDatabase();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight requests
// Handle preflight requests
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Body parser middleware
app.use(express.urlencoded({ extended: true }));

// Routes
const User = require("./routes/userRoutes");
const taxRoutes = require("./routes/taxRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const purchaseVoucherRoutes = require("./routes/purchaseVoucher");
const salesVoucherRoutes = require("./routes/salesVoucherRoutes");
const receiptVouchers = require("./routes/recieptVoucher");
const journalVoucher = require("./routes/journalRoutes");
const paymasterVoucher = require("./routes/payMaster");
const contraVouchers = require("./routes/contraRoutes");
const creditNotes = require("./routes/creditNoteRoutes");
const companyRoutes = require("./routes/companyRoutes");
const tax = require("./routes/findTax");
const getAllTransactions = require("./routes/getAllTransaction");
const stockItems = require("./routes/stockItems");
const stockCategory = require("./routes/stockCategory");
const stockGroups = require("./routes/stockGroup");
const debitNoteRoutes = require("./routes/debitNote");
const EmployeeRoutes = require("./routes/staff/staffRoutes");
const employeeHead = require("./routes/staff/employeeHead");
const payHeadRoutes = require("./routes/staff/payHead");
const operationsRoute = require("./routes/staff/dummyStaff");
const payHeadDetailsRoutes = require("./routes/staff/payHeadDetailsRoutes");
const employeegroupRoutes = require("./routes/staff/employeegroupRoutes");
const attendanceRoutes = require("./routes/staff/attendanceRoutes");
const incomeRoutes = require("./routes/antony1");
const expenseRoutes = require("./routes/expenseExpense");
const clientledgerRoutes = require("./routes/ledgersRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const vehicleRegistrationRoutes = require("./routes/vehicleRegistrationRoutes");
const groupRoutes = require("./routes/Group");
const iin = require("./routes/p&l");
const iiin = require("./routes/antony3");
const attendanceemployees = require("./routes/attendanceEmployees");
const clientLedgeri = require("./routes/ledgerFor");
const transactionRoutes = require("./routes/antony");
const purchaseVoucherRoute = require("./routes/servicePurchaseRoutes");
const salesVoucher = require("./routes/salesService");
const assets = require("./routes/antony3");
// Registering routes
app.use("/api/v1/auth", User);
app.use("/api/v1/payments", paymentRoutes);
app.use("/api/v1/purchases", purchaseVoucherRoutes);
app.use("/api/v1/services/purchases", purchaseVoucherRoute);
app.use("/api/v1/service/sales-vouchers", salesVoucher);
app.use("/api/v1/sales-vouchers", salesVoucherRoutes);
app.use("/api/v1/receipt-vouchers", receiptVouchers);
app.use("/api/v1/journal-vouchers", journalVoucher);
app.use("/api/v1/paymaster", paymasterVoucher);
app.use("/api/v1/contra-vouchers", contraVouchers);
app.use("/api/v1/creditnote", creditNotes);
app.use("/api/v1/debitnote", debitNoteRoutes);
app.use("/api/v1", companyRoutes);
app.use("/api/v1/find", tax);
app.use("/api/v1", groupRoutes);
app.use("/api/v1/transactions", getAllTransactions);
app.use("/api/v1/items", require("./routes/itemRoutes"));
app.use("/api/v1/stocks", stockItems); //333
app.use("/api/v1/stocks", stockCategory); //222
app.use("/api/v1/stocks", stockGroups); //111
app.use("/api/v1/employees", EmployeeRoutes);
app.use("/api/v1/client/ledgers", clientledgerRoutes);
app.use("/api/v1/employeehead", employeeHead);
app.use("/api/v1/payheads", payHeadRoutes);
app.use("/api/v1/operations", operationsRoute);
app.use("/api/v1/payHeadDetails", payHeadDetailsRoutes);
app.use("/api/v1/employeegroups", employeegroupRoutes);
app.use("/api/v1/attendances", attendanceRoutes);
app.use("/api/v1/attendanceemployees", attendanceemployees);
app.use("/api/v1/client/ledger", clientLedgeri);
app.use("/api/v1", vehicleRegistrationRoutes);
app.use("/api/v1/", transactionRoutes);
app.use("/api/v1/expenseincomes", incomeRoutes);
app.use("/api/v1/expenseexpensee", iin);
app.use("/api/v1/expenseexpense", iiin);
app.use("/api/v1/assets", assets);
app.use("/api/v1/invoices", invoiceRoutes);
app.use("/api/v1/transections", require("./routes/transactionRoutes"));
app.use("/api/v1/transection", require("./routes/transectionRoute")); // personal app
app.use("/api/v1/vehicle-rent", require("./routes/vehicleRent")); // personal app
app.use("/api/v1/profits", require("./routes/monthProfit")); // personal app

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT} in ${process.env.NODE_ENV} mode`
  );
});