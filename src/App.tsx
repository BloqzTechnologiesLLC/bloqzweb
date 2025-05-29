import { Switch, Route } from "wouter";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeProvider as IndustryThemeProvider } from "@/contexts/ThemeContext";
import { BloqzLanding } from "@/pages/bloqz-landing";
import About from "@/pages/about";
import CannaLink from "@/pages/cannalink";
import VaultNet from "@/pages/vaultnet";
import MetaEstate from "@/pages/metaestate";
import GridFlux from "@/pages/gridflux";
import ShopChain from "@/pages/shopchain";
import DineSync from "@/pages/dinesync";
import FreightFlow from "@/pages/freightflow";
import CivicCore from "@/pages/civiccore";
import PolicyNet from "@/pages/policynet";
import SignalMesh from "@/pages/signalmesh";
import LearnLedger from "@/pages/learnledger";
import TrackPort from "@/pages/trackport";
import ArrowChain from "@/pages/arrowchain";
import Compliance from "@/pages/compliance";
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
      <Route path="/cannalink" component={CannaLink} />
      <Route path="/vaultnet" component={VaultNet} />
      <Route path="/metaestate" component={MetaEstate} />
      <Route path="/gridflux" component={GridFlux} />
      <Route path="/shopchain" component={ShopChain} />
      <Route path="/dinesync" component={DineSync} />
      <Route path="/freightflow" component={FreightFlow} />
      <Route path="/civiccore" component={CivicCore} />
      <Route path="/policynet" component={PolicyNet} />
      <Route path="/signalmesh" component={SignalMesh} />
      <Route path="/learnledger" component={LearnLedger} />
      <Route path="/trackport" component={TrackPort} />
      <Route path="/arrowchain" component={ArrowChain} />
      <Route path="/compliance" component={Compliance} />
      <Route path="/security" component={Security} />
      <Route path="/certifications-compliance" component={CertificationsCompliance} />
      <Route path="/compliance-standards" component={ComplianceStandards} />
      <Route path="/regulatory-resources" component={RegulatoryResources} />
      <Route path="/investor-relations" component={InvestorRelations} />
      <Route path="/current-status" component={CurrentStatus} />
      <Route path="/security-alerts" component={SecurityAlerts} />
      <Route path="/corporate" component={Corporate} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <IndustryThemeProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-background">
          <Router />
        </div>
      </ThemeProvider>
    </IndustryThemeProvider>
  );
}

export default App;