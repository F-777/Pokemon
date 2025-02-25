function Slider() {
 {/* Pagination Controls */}
 <div className="pagination-controls" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
 <Button
   variant="secondary"
   onClick={() => navigate(`/page/${Math.max(currentPage - 1, 1)}`)}
   disabled={currentPage === 1}
   style={{ marginRight: "10px" }}
 >
   Previous
 </Button>
 <span style={{ alignSelf: "center" }}>
   Page {currentPage} of {totalPages}
 </span>
 <Button
   variant="secondary"
   onClick={() => navigate(`/page/${Math.min(currentPage + 1, totalPages)}`)}
   disabled={currentPage === totalPages}
   style={{ marginLeft: "10px" }}
 >
   Next
 </Button>
</div>
}

export default Slider