import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeProvider as IndustryThemeProvider } from "@/contexts/ThemeContext";
import { BloqzLanding } from "@/pages/bloqz-landing";
import { MarketingLanding } from "@/pages/marketing-landing";
import Landing from "@/pages/landing";
import PatientPortal from "@/pages/patient-portal";
import DoctorPortal from "@/pages/doctor-portal";
import PharmacyPortal from "@/pages/pharmacy-portal";
import InsurancePortal from "@/pages/insurance-portal";
import PatientMobileDemo from "@/pages/patient-mobile-demo";
import About from "@/pages/about";
import RxBridge from "@/pages/rxbridge";
import CannaLink from "@/pages/cannalink";
import VaultNet from "@/pages/vaultnet";
import MetaEstate from "@/pages/terrachain";
import GridFlux from "@/pages/gridflux";
import ShopChain from "@/pages/shopchain";
import DineSync from "@/pages/dinesync";
import FreightFlow from "@/pages/freightflow";
import CivicCore from "@/pages/civiccore";
import PolicyNet from "@/pages/policynet";
import SignalMesh from "@/pages/signalmesh";
import LearnLedger from "@/pages/learnledger";
import TrackPort from "@/pages/trackport";
import Bloqz from "@/pages/bloqz";
import Compliance from "@/pages/compliance";
import RxBridgeProtectedDemo from "@/pages/rxbridge-demo-protected";
import Security from "@/pages/security";
import CertificationsCompliance from "@/pages/certifications-compliance";
import ComplianceStandards from "@/pages/compliance-standards";
import RegulatoryResources from "@/pages/regulatory-resources";
import InvestorRelations from "@/pages/investor-relations";
import CurrentStatus from "@/pages/current-status";
import SecurityAlerts from "@/pages/security-alerts";
import Corporate from "@/pages/corporate";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={BloqzLanding} />
      <Route path="/about" component={About} />
      <Route path="/rxbridge" component={RxBridge} />
      <Route path="/cannalink" component={CannaLink} />
      <Route path="/vaultnet" component={VaultNet} />
      <Route path="/terrachain" component={MetaEstate} />
      <Route path="/gridflux" component={GridFlux} />
      <Route path="/shopchain" component={ShopChain} />
      <Route path="/dinesync" component={DineSync} />
      <Route path="/freightflow" component={FreightFlow} />
      <Route path="/civiccore" component={CivicCore} />
      <Route path="/policynet" component={PolicyNet} />
      <Route path="/signalmesh" component={SignalMesh} />
      <Route path="/learnledger" component={LearnLedger} />
      <Route path="/trackport" component={TrackPort} />
      <Route path="/bloqz" component={Bloqz} />
      <Route path="/compliance" component={Compliance} />
      <Route path="/rxbridge-demo" component={RxBridgeProtectedDemo} />
      <Route path="/security" component={Security} />
      <Route path="/certifications-compliance" component={CertificationsCompliance} />
      <Route path="/compliance-standards" component={ComplianceStandards} />
      <Route path="/regulatory-resources" component={RegulatoryResources} />
      <Route path="/investor-relations" component={InvestorRelations} />
      <Route path="/current-status" component={CurrentStatus} />
      <Route path="/security-alerts" component={SecurityAlerts} />
      <Route path="/corporate" component={Corporate} />
      <Route path="/marketing" component={MarketingLanding} />
      <Route path="/demo" component={Landing} />
      <Route path="/patient" component={PatientPortal} />
      <Route path="/patient-mobile" component={PatientMobileDemo} />
      <Route path="/doctor" component={DoctorPortal} />
      <Route path="/pharmacy" component={PharmacyPortal} />
      <Route path="/insurance" component={InsurancePortal} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <IndustryThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </IndustryThemeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
